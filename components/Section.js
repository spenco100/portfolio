export default function Section({ classes, title, children }) {
  return (
    <div className={ classes }>
      <h3 className="text-center text-white text-4xl md:text-5xl font-semibold">{title}</h3>
      <div className="flex flex-col items-center text-white pt-8">
        {children}
      </div>
    </div>
  )
}