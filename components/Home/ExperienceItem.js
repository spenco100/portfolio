import MiniIcon from '../Icons/MiniIcon';

export default function ExperienceItem ({ title, company, time, description, icon, isLast }) {
  return (<>
    <li className={ isLast ? 'pb-3' : 'border-l-2 border-gray-700 pb-3' }>
      <div className="flex items-flex-start">
        <div className="-ml-3">
          { MiniIcon(icon) }
        </div>
        <div className="flex-1 ml-4 max-w-3xl">
          <p className="text-lg font-semibold">{ title }</p>
          <p className="text-md opacity-80">{ company }</p>
          <p className="text-sm opacity-50">{ time }</p>
          <p>{ description }</p>
        </div>
      </div>
    </li>
  </>)
}