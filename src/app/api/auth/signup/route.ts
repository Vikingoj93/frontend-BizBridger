import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/libs/mongoose";
import User from "@/models/user";
import { IUser } from "@/types/interfaces";
import { validateUserData } from "@/libs/validate";

export async function POST(req: NextRequest) {
  try {
    const conn = await connectDB();

    //datos para registrar un usuario
    const data: IUser = await req.json();

    if (!validateUserData(data)) {
      return NextResponse.json(
        { error: "los datos enviados no son validos" },
        { status: 400 }
      );
    }

    const newUser = new User(data);
    const result = await newUser.save();

    return NextResponse.json({
      message: "usuario registrado con exito",
      user: result,
    });
  } catch (error) {
    console.error("error:", error);
    return NextResponse.json(
      { error: "error al registrar usuario" },
      { status: 400 }
    );
  }
}

export async function PUT(req: Request) {

    try {
        const conn = await connectDB();

  //datos para actualizar un usuario
  const data: IUser = await req.json();

  //busca el usuario para validar existencia
  const userExist = await User.findOne({ email: data.email });

  //validar existencia
  if (!userExist) {
    return NextResponse.json(
      { error: "no existe el usuario" },
      { status: 400 }
    );
  }
  //validar datos
  if (!validateUserData(data)) {
    return NextResponse.json(
      { error: "los datos enviados no son validos" },
      { status: 400 }
    );
  }

  //actualiza usuario con el nuevo proveedor
  const userUpdate = await User.findOneAndUpdate(
    { email: data.email },
    data,
    { new: true }
  );

  //devuelve un mensaje de error si el usuario se actulizo con campos no validos
  if (!validateUserData(userUpdate)) {
    return NextResponse.json({error: 'Los datos no se actualizaron correctamente'}, {status: 500})
  }

  return NextResponse.json({
    message: `Se agrego un nuevo proveedor al usuario ${userExist.email}`,
  });
    } catch (error) {
        return NextResponse.json({error: "error al actualizar el usuario"}, {status: 400})
    }
  
}
