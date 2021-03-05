export default function Section({ title, children }) {
  return (
    <div className="bg-gray-900 py-10">
      <h3 className="text-center text-white text-5xl font-semibold">{title}</h3>
      <div className="flex flex-col items-center text-white pt-4">
        {children}
      </div>
    </div>
  )
}