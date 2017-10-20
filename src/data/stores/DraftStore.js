import Immutable from 'immutable';
import { ReduceStore } from 'flux/utils';
import FootballActionTypes from './../FootballActionTypes';
import FootballDispatcher from './../FootballDispatcher';
import PlayerModel from './../models/PlayerModel';
import Counter from './../../utilities/Counter';
import PlayerAPI from './../PlayerApi';

class DraftStore extends ReduceStore {
    constructor() {
        super(FootballDispatcher);
    }

    getInitialState() {
        return Immutable.OrderedMap;
    }

    reduce(state, action) {
        switch (action.type) {

            case FootballActionTypes.DELETE_PLAYER:
                return state.delete(action.id);

            case FootballActionTypes.INSERT_PLAYER:

                // Don't add Players with no text.
                if (!action.text) {
                    return state;
                }

                const idObj = Counter.increment();

                return state.set(idObj.id, new PlayerModel({
                    id: idObj.id,
                    number: idObj.num,
                    name: action.text,
                    position: 'QB',
                }));

            default:
                return state;
        }
    }
}

export default new DraftStore();