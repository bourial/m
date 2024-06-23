import axios from 'axios';
import { ITeam } from '../interfaces/teams';

export const getTeams = async (): Promise<{ teams: ITeam[] }> => {
  const response = await axios.get(
    `https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?l=English%20Premier%20League`
  );
  return response.data;
};
