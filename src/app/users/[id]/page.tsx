interface Props {
  params: {id: number}
}

const UserIdPage: React.FC<Props> = ({ params }) => {
  return (
    <span>Estas en la pagina del user {params.id}</span>
  )
}

export default UserIdPage