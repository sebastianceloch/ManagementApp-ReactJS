import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

export default function NewProject({onAdd, onCancel})
{

    const modalRef = useRef();
    const titleRef = useRef();
    const descriptionRef = useRef();
    const dateRef = useRef();

    function handleSave()
    {
        const enteredTitle = titleRef.current.value;
        const enteredDescription = descriptionRef.current.value;
        const enteredDate = dateRef.current.value;

        if(enteredTitle.trim() === '' || enteredDescription.trim() === '' || enteredDate.trim() === '')
        {
            modalRef.current.open();
            return;
        }
        
        onAdd({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDate
        });

    }
    return(
        <>
        <Modal ref={modalRef} buttonValue="Close">
            <h2 className="text-xl font-bold text-stone-600 my-4">Invalid input</h2>
            <p className="text-stone-500 mb-4">You forgot to enter a value</p>
            <p className="text-stone-500 mb-4">Provide valid value for every input</p>
        </Modal>
        <div className="w-[35rem] mt-16">
            <menu className="flex items-center justify-end gap-4 my-4">
                <li>
                    <button className="text-stone-800 hover:text-stone-950" onClick={onCancel}>Cancel</button>
                </li>
                <li>
                    <button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950" onClick={handleSave}>Save</button>
                </li>
            </menu>
            <div>
                <Input label="Title" type="text" ref={titleRef}></Input>
                <Input label="Description" isTextarea ref={descriptionRef}></Input>
                <Input label="Due date" type="date" ref={dateRef}></Input>
            </div>
        </div>
        </>
    );
}