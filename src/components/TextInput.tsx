export default function TextInput({ name, label, className, onChange }: { name: string; label: string; className?: string; onChange: (value: string) => void }) {
  return (
    <div className={`${className} w-full py-4 pl-4`}>
      <div className={`relative flex items-end border-b-2 border-slate-500 text-black focus-within:border-blue-300 `} onClick={focusInput}>
        <input
          name={name}
          onChange={(e) => onChange(e.target.value)}
          className={`peer appearance-none bg-transparent text-base text-black placeholder-transparent outline-none focus:outline-none`}
          placeholder={`${label}`}
        />
        <label className="pointer-events-none absolute -top-2 left-0 text-sm text-slate-600 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-sm">
          {label}
        </label>
        <div className="bg-industrial-10 mb-1 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full"></div>
      </div>
    </div>
  )
}

function focusInput(e: React.MouseEvent<HTMLDivElement>) {
  const input = e?.currentTarget?.children[0] as HTMLInputElement
  input.focus()
}
