import { useQuery } from '@tanstack/react-query';
import CustomAutocomplete, { AutocompleteOption } from './custom-autocomplete';
import { ITeam } from '../interfaces/teams';
import { QUERIES } from '../services/queries';
import { getTeams } from '../services/teams';
import { useState } from 'react';
import Team from './team';

interface TeamOption extends AutocompleteOption {
  team: ITeam;
}

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

  const handleTeamChange = (value: TeamOption | TeamOption[] | null) => {
    if (value && !Array.isArray(value)) {
      setSelectedTeam(value.team);
    }
  };

  return (
    <main className='min-h-screen p-5'>
      {isLoading ? (
        <div className='mx-auto mt-6 animate-pulse bg-gray-200 h-14 w-[500px] rounded-full' />
      ) : (
        <CustomAutocomplete<TeamOption>
          className='mx-auto mt-6 h-14 w-[500px] bg-gray-100 rounded-full z-20 relative'
          options={
            teams?.teams.map(team => ({ label: team.strTeam, team })) || []
          }
          onChange={handleTeamChange}
          label='Choose a Team'
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
