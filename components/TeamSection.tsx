import Link from 'next/link'
import { TeamMember } from '@/types'
import TeamMemberCard from '@/components/TeamMemberCard'

interface TeamSectionProps {
  team: TeamMember[]
  showViewAll?: boolean
  limit?: number
}

export default function TeamSection({ team, showViewAll = false, limit }: TeamSectionProps) {
  if (!team || team.length === 0) {
    return null
  }
  
  // Apply limit if specified
  const displayedTeam = limit && limit > 0 ? team.slice(0, limit) : team
  
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
          {displayedTeam.map(member => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
        
        {/* View All Link */}
        {showViewAll && (
          <div className="text-center mt-12">
            <Link 
              href="/team"
              className="inline-block px-8 py-4 bg-primary text-neutral font-bold rounded-lg hover:bg-primary/90 transition-colors"
            >
              Meet The Whole Team →
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}