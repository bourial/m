import { useQuery } from '@tanstack/react-query';
import CustomAutocomplete from './custom-autocomplete';
import { ITeam } from '../interfaces/teams';
import { QUERIES } from '../services/queries';
import { getTeams } from '../services/teams';
import { useState } from 'react';
import Team from './team';

const Teams = () => {
  const [selectedTeam, setSelectedTeam] = useState<ITeam | null>(null);

  const {
    data: teams,
    isLoading,
    isError,
  } = useQuery<{ teams: ITeam[] }>({
    queryKey: [QUERIES.TEAMS],
    queryFn: () => getTeams(),
  });

  if (isError) return <div>Failed to load</div>;

  return (
    <main className='min-h-screen p-5'>
      {isLoading ? (
        <div className='mx-auto mt-6 animate-pulse bg-gray-200 h-14 w-[500px] rounded-full' />
      ) : (
        <CustomAutocomplete
          className='mx-auto mt-6'
          data={teams?.teams || []}
          onChange={setSelectedTeam}
        />
      )}

      {selectedTeam ? (
        <Team team={selectedTeam} />
      ) : (
        <div className='flex justify-center items-center h-[70vh] text-gray-400 font-light'>
          Select a team to see details
        </div>
      )}
    </main>
  );
};

export default Teams;
