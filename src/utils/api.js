import {
    _getUsers,
    _getUser,
    _getQuestions,
    _saveQuestion,
    _saveQuestionAnswer
} from './_DATA'

export function saveQuestion (info) {
    return _saveQuestion(info);
}





export function getUser (id) {
    return _getUser(id);
}

export function getUsers() {
    return _getUsers();
}

export function getQuestions() {
    return _getQuestions();
}