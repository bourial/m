import { ITeam } from '../interfaces/teams';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';

const Team = ({ team }: { team: ITeam }) => {
  return (
    <div className='mt-12 px-[25%]'>
      <img src={team?.strBanner} alt='' className='rounded-xl' />

      <div className='flex items-center space-x-4 my-4'>
        <img src={team?.strBadge} alt='' className='h-20' />
        <div>
          <h1 className='text-3xl font-semibold'>{team?.strAlternate}</h1>
          <h3 className='flex items-center gap-2'>
            <FmdGoodIcon fontSize='small' />
            {team?.strLocation}
          </h3>
        </div>
      </div>

      <p className='mt-2 font-light text-sm text-gray-500'>
        {team?.strDescriptionEN}
      </p>

      <div className='mt-3 space-x-2'>
        <a href={`https://${team?.strFacebook}`} target='_blank'>
          <FacebookIcon />
        </a>
        <a href={`https://${team?.strInstagram}`} target='_blank'>
          <InstagramIcon />
        </a>
        <a href={`https://${team?.strTwitter}`} target='_blank'>
          <XIcon />
        </a>
      </div>
    </div>
  );
};

export default Team;
