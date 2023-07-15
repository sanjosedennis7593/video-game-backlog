import Link from 'next/link'

export default function Home() {
  return (
    <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://images.pexels.com/photos/194511/pexels-photo-194511.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)' }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-7xl font-bold">GameTrackr</h1>
          <p className="mb-5 text-2xl">Track, Manage, and Conquer Your Game Library</p>
          <Link className="btn btn-primary" href="/auth/signin">Get Started</Link>
        </div>
      </div>
    </div>
  )
}
