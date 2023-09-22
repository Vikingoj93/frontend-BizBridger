import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import User from "@/models/user";
import { connectDB } from "@/libs/mongoose";
import axios, { AxiosError } from "axios";
import { validateRes } from "@/libs/validate";

const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = process.env;

const { REGISTER_URL }: any = process.env;

interface GoogleProviderConfig {
  clientId: string;
  clientSecret: string;
}

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: GOOGLE_CLIENT_ID as string,
      clientSecret: GOOGLE_CLIENT_SECRET as string,
    } as GoogleProviderConfig),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      try {
        //conectar DB y para verificar
        const db = await connectDB();
        console.log("buscando usuario");
        const userExist = await User.findOne({ email: user?.email });

        // si el usuario no esta registrado, obtener datos del usuario para enviar los datos al backend para que valide y registre en la base de datos
        if (!userExist) {
          console.log(
            "usuario no existe, obteniendo datos para enviar a al backend"
          );
          const newUser = new User({
            name: user?.name,
            email: user?.email,
            image: user?.image,
            providers: [
              {
                providerId: account?.providerAccountId,
                provider: account?.provider,
              },
            ],
          });
          console.log(newUser);
          try {
            const res = await axios.post(`${REGISTER_URL}`, newUser);

            console.log("validando respuesta del backend");
            console.log(res.status);
            validateRes(res);
          } catch (error) {
            if (error instanceof AxiosError) {
              console.error("error en la solicitud", error.message);
              return false;
            }
          }
        }

        //retorna true si el usuario esta iniciando sesion con otro provedor, retorna false si es un provedor frecuente
        const validateProvider = await userExist.providers.some(
          (provider: any) =>
            provider.provider === account?.provider &&
            provider.providerId === account?.providerAccountId
        );

        //si no un provedor frecuente, vincula como provedor al usuario mediante una actualizacion en la base de datos
        if (!validateProvider) {
          userExist.providers.push({
            providerId: account?.providerAccountId,
            provider: account?.provider,
          });

          try {
            const res = await axios.put(
              `${REGISTER_URL}`,
              userExist
            );

            validateRes(res);
            return true;
          } catch (error) {
            if (error instanceof AxiosError) {
              console.error("error en la solicitud", error.message);
              return false;
            }
          }
        }
      } catch (error) {
        if (error instanceof AxiosError) {
          console.log(error.message);
        }
      }

      console.log("inicio de sesion exitoso");
      return true;
    },
    async session({ session, token, user }) {
      return session;
    },
    async jwt({ token, user, account, profile }) {
      return token;
    },
  },
});

export { handler as GET, handler as POST };
