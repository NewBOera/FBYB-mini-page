import { useField } from 'formik';

export function InputField({ label, ...props }) {
  // @ts-expect-error props are not necesary
  const [field, meta] = useField(props);

  return (
    <div className="flex flex-col gap-1 text-start">
      <label className="text-sm text-white" htmlFor={props.id || props.name}>
        {label}*
      </label>
      <input
        className={`w-full py-4 px-2 text-white outline-none rounded-md bg-[#F8FBFF33] border-[1px] border-[#FFFFFF44] ${meta.error && meta.touched ? 'input-error' : ''}`}
        {...field}
        {...props}
      />

      {meta.touched && meta.error ? <span className="text-red-500 text-xs font-principal-light">{meta.error}</span> : null}
    </div>
  );
}
