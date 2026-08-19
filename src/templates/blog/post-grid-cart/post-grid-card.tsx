interface PostGridCardProps{
  children: React.ReactNode
}

export function PostGridCard({ children }: PostGridCardProps) {
  return(
    <div className='container grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 md:gap-6'>{
      children}
    </div>
  )
}