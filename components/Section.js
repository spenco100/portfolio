export default function Section({ classes, passId, title, children }) {
  return (<>
    <div className={ classes } id={ passId }>
      <h3 className="text-center text-white text-4xl md:text-5xl font-semibold">{title}</h3>
      <div className="flex flex-col items-center text-white pt-8">
        {children}
      </div>
    </div>
    <style jsx>
      {`
      .darkbg {
        background-color: #090C13;
      }
      `}
    </style>
  </>)
}