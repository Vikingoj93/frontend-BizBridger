export function InputTitle({
  data,
  handleChange,
  label,
}: {
  data: any;
  handleChange: any;
  label: any;
}) {
  return (
    <div className="flex flex-col">
      <label htmlFor="title">{label}</label>
      <input
        type="text"
        id="title"
        name="title"
        value={data.title}
        onChange={handleChange}
        required
        className="px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-purple-500"
      />
    </div>
  );
}

export function InputDescription({
  data,
  handleChange,
  label,
}: {
  data: any;
  handleChange: any;
  label: any;
}) {
  return (
    <div className="flex flex-col">
      <label htmlFor="description">{label}</label>
      <textarea
        id="description"
        name="description"
        value={data.description}
        onChange={handleChange}
        required
        className="px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-purple-500"
      />
    </div>
  );
}

export function InputDate({
  data,
  handleChange,
  label,
}: {
  data: any;
  handleChange: any;
  label: any;
}) {
  return (
    <div>
      <label className="mr-1" htmlFor="Date">
        {label}
      </label>
      <input
        type="date"
        id="Date"
        name="Date"
        value={data.eventDate}
        onChange={handleChange}
        required
        className="px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-purple-500"
      />
    </div>
  );
}

export function InputCheckbox({
  data,
  handleChange,
  label,
}: {
  data: any;
  handleChange: any;
  label: any;
}) {
  return (
    <div>
      <label>
        <input
          type="checkbox"
          name="requiresTime"
          checked={data.requiresTime}
          onChange={handleChange}
          className="mr-2"
        />{" "}
        {label}
      </label>
    </div>
  );
}

export function InputTime({
  data,
  handleChange,
  label,
}: {
  data: any;
  handleChange: any;
  label: any;
}) {
  return (
    <div>
      <label htmlFor="Time">{label}</label>
      <input
        type="time"
        id="Time"
        name="Time"
        value={data.timeDate || ""}
        onChange={handleChange}
        className="px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-purple-500"
        required
      />
    </div>
  );
}
export function InputCategory({
  data,
  handleChange,
}: {
  data: any;
  handleChange: any;
}) {
  return (
    <div>
      <label htmlFor="category">Categoría</label>
      <select
        id="category"
        name="category"
        value={data}
        onChange={handleChange}
        className="px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-purple-500"
        required
      >
        <option value="">Seleccione una categoria</option>
        <option value="trabajo">Trabajo</option>
        <option value="personal">Personal</option>
        <option value="Otros">Otros</option>
      </select>
    </div>
  );
}
