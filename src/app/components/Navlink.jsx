import Link from 'next/link'

const Navlink = ({ href, title }) => {
  return (
    <Link
    href={href}
    className="block py-2 pl-3 pr-4 sm:text-xl md:p-0 
              text-darkblue dark:text-background
              font-display hover:font-bold hover:scale-110 duration-100"
    >
      {title}
    </Link>
    
  )
}

export default Navlink
