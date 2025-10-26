import { TeamMember } from '@/types'
import TeamMemberCard from '@/components/TeamMemberCard'

interface TeamSectionProps {
  team: TeamMember[]
}

export default function TeamSection({ team }: TeamSectionProps) {
  if (!team || team.length === 0) {
    return null
  }
  
  return (
    <section id="team" className="py-20 bg-neutral">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-primary mb-4">
            Meet The Team
          </h2>
          <p className="text-xl text-gray-600">
            The brilliant minds behind the magic. And yes, we're hiring.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map(member => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  )
}