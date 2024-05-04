import { FC } from 'react';
import { Button, Card, CardBody, Chip, Image, User } from '@nextui-org/react';

interface Link {
  href: string;
  icon: JSX.Element;
  label: string;
}

interface LinkTreeProps {
  chips?: string[];
  links?: Link[];
  profilePictureAlt?: string;
  profilePictureSrc?: string;
  userAvatarSrc?: string;
  userDescription?: string;
  userName?: string;
}

export const LinkTree: FC<LinkTreeProps> = ({
  chips = [],
  links = [],
  profilePictureAlt = '',
  profilePictureSrc = '',
  userAvatarSrc = '',
  userDescription = '',
  userName = '',
}) => {
  return (
    <Card shadow='lg' className='bg-gradient-to-b from-blue-700 via-blue-800 to-gray-900 min-w-[400px]'>
      <CardBody className='mb-2 mt-2'>
        <div className='flex flex-col w-full'>
          {profilePictureSrc && (
            <div className='flex justify-center'>
              <Image
                isBlurred
                alt={profilePictureAlt}
                className='rounded-lg object-cover'
                height={275}
                src={profilePictureSrc}
                width={275}
              />
            </div>
          )}
          {userName && (
            <div className='flex justify-center pt-5'>
              <User
                name={userName}
                description={userDescription}
                avatarProps={{
                  src: userAvatarSrc
                }}
              />
            </div>
          )}
          {chips.length > 0 && (
            <div className={`flex flex-wrap justify-center m-4 gap-3 max-w-[350px]`}>
              {chips.map((chip, index) => (
                <Chip
                  key={index}
                  className='bg-gradient-to-t from-gray-700 via-gray-900 to-black'
                  color='primary'
                  size='sm'
                  variant='shadow'
                >
                  {chip}
                </Chip>
              ))}
            </div>
          )}
          {links.length > 0 && (
            <div className='flex flex-col justify-center gap-4 pt-4'>
              {links.map((link, index) => (
                <a key={index} href={link.href} target='_blank' rel="noopener noreferrer">
                  <Card className='w-full'>
                    <Button className='bg-gradient-to-r from-green-300 via-blue-500 to-purple-600' radius='md' size="md" startContent={link.icon} variant='shadow'>
                      {link.label}
                    </Button>
                  </Card>
                </a>
              ))}
            </div>
          )}
        </div>
      </CardBody>
    </Card>
  );
};
