import Image from 'next/image'

function img() {
  return (
    <div>
      <Image src="/images/pikaface.png" alt="Mon image" width={500} height={500} />
    </div>
  )
}
