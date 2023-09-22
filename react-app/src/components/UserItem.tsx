type Props = {
    title: string,
    first: string,
    last: string,
    picture:string
}
export default function UserItem({title,first,last,picture}:Props) {
    return (
        <li className="userListItem">
            <img src={picture}/>
            <p>{title} {first} {last}</p>
        </li>
    )
}