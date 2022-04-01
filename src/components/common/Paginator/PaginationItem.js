const PaginationItem = ({ item, currentPage, onClick }) => {
    return (
        <li className={`${currentPage === item ? 'active' : ''}`}>
            <span onClick={() => onClick()}>{item}</span>
        </li>
    );
}

export default PaginationItem;