import Input from "./Input"
import List from "./List"

export const TodoApp = () => {
    return (
        <>
            <Input />
            <List />
            <p className="help">Drag and drop to reorder list</p>
        </>
    )
}
