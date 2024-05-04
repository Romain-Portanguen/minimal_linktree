import { GithubIcon, TwitterIcon, DiscordIcon } from "@/components/icons";

export const linkTreeConfigurations = [
  {
    profilePictureSrc: '/assets/svg/undraw_cat_epte.svg',
    profilePictureAlt: 'Profile picture alt',
    userName: 'John Doe',
    userDescription: 'Software Engineer',
    userAvatarSrc: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
    chips: ['JavaScript', 'TypeScript', 'SQL', 'React.js', 'Next.js', 'Node'],
    links: [
      {
        href: 'https://github.com/Romain-Portanguen/',
        label: 'Github',
        icon: <GithubIcon />
      },
      {
        href: '#',
        label: 'Twitter',
        icon: <TwitterIcon />
      },
      {
        href: '#',
        label: 'Discord',
        icon: <DiscordIcon />
      }
    ]
  },
];
