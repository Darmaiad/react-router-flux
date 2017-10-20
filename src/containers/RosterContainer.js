import { Container } from 'flux/utils';
import RosterStore from './../data/stores/RosterStore'
import FootballActions from './../data/FootballActions'
import Roster from './../components/AppChildren/MainChildren/Roster';

function getStores() {
    return [
        RosterStore,
    ];
}

function getState() {
    return {
        players: RosterStore.getState(),
        onItemAdd: FootballActions.insertPlayer,
        onDeletePlayer: FootballActions.deletePlayer,
    }
}

export default Container.createFunctional(Roster, getStores, getState);