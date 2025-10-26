import { TeamMember } from '@/types'

interface TeamMemberCardProps {
  member: TeamMember
}

export default function TeamMemberCard({ member }: TeamMemberCardProps) {
  const photo = member.metadata.photo
  
  return (
    <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-xl transition-all hover:-translate-y-1">
      {photo && (
        <div className="mb-6">
          <img
            src={`${photo.imgix_url}?w=400&h=400&fit=crop&auto=format,compress`}
            alt={member.metadata.name}
            className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-primary"
            width="128"
            height="128"
          />
        </div>
      )}
      
      <h3 className="text-xl font-bold text-primary mb-2">
        {member.metadata.name}
      </h3>
      
      <p className="text-secondary font-medium mb-4">
        {member.metadata.role}
      </p>
      
      {member.metadata.bio && (
        <p className="text-gray-600 text-sm mb-6">
          {member.metadata.bio}
        </p>
      )}
      
      <div className="flex justify-center gap-4">
        {member.metadata.email && (
          <a
            href={`mailto:${member.metadata.email}`}
            className="text-primary hover:text-accent transition-colors"
            aria-label="Email"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
          </a>
        )}
        
        {member.metadata.linkedin_url && (
          <a
            href={member.metadata.linkedin_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-accent transition-colors"
            aria-label="LinkedIn"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
            </svg>
          </a>
        )}
        
        {member.metadata.twitter_handle && (
          <a
            href={`https://twitter.com/${member.metadata.twitter_handle.replace('@', '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-accent transition-colors"
            aria-label="Twitter"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.46 6c-.85.38-1.78.64-2.75.76 1-.6 1.76-1.55 2.12-2.68-.93.55-1.96.96-3.06 1.18-.88-.94-2.13-1.53-3.51-1.53-2.66 0-4.81 2.16-4.81 4.81 0 .38.04.75.13 1.1-4-.2-7.53-2.11-9.9-5.02-.41.71-.65 1.54-.65 2.42 0 1.67.85 3.14 2.14 4-.79-.03-1.53-.24-2.18-.6v.06c0 2.33 1.66 4.28 3.86 4.72-.4.11-.83.17-1.27.17-.31 0-.62-.03-.92-.08.62 1.94 2.42 3.35 4.55 3.39-1.67 1.31-3.77 2.09-6.05 2.09-.39 0-.78-.02-1.17-.07 2.18 1.4 4.77 2.21 7.55 2.21 9.06 0 14.01-7.5 14.01-14.01 0-.21 0-.42-.02-.63.96-.7 1.8-1.56 2.46-2.55z"/>
            </svg>
          </a>
        )}
      </div>
    </div>
  )
}