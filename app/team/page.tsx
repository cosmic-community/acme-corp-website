import { getTeamMembers } from '@/lib/cosmic'
import TeamSection from '@/components/TeamSection'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Our Team - Acme Corp',
  description: 'The brilliant minds behind the magic. And yes, we\'re hiring.',
}

export default async function TeamPage() {
  const team = await getTeamMembers()
  
  return (
    <main className="min-h-screen bg-neutral">
      <div className="bg-primary text-neutral py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Meet The Team</h1>
          <p className="text-xl max-w-2xl mx-auto">
            The brilliant minds behind the magic. And yes, we're hiring. 
            We're a ragtag group of talented weirdos who make great things happen.
          </p>
        </div>
      </div>
      <TeamSection team={team} />
      <Footer />
    </main>
  )
}