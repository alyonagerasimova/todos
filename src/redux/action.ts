export enum TodoActionsType {
    ADD_TODO = "ADD_TODO",
    DELETE_TODO = "DELETE_TODO",
    TOGGLED_TODO = "TOGGLED_TODO",
    COMPLETED_CLEARED = "COMPLETED_CLEARED",
    STATUS_CHANGED = "STATUS_CHANGED"
}

type TodoAdded = {
    type: TodoActionsType.ADD_TODO,
    payload: string;
}

type TodoToggled = {
    type: TodoActionsType.TOGGLED_TODO,
    payload: string;
}

type TodoDeleted = {
    type: TodoActionsType.DELETE_TODO,
    payload: string;
}

type CompletedCleared = {
    type: TodoActionsType.COMPLETED_CLEARED
}

type StatusFilterChanged = {
    type: TodoActionsType.STATUS_CHANGED,
    payload: string
}

export type TodoAction =
    TodoAdded
    | TodoToggled
    | TodoDeleted
    | CompletedCleared
    | StatusFilterChanged;

