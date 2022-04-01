import React, { useState } from 'react';
import NextIconButton from './NextIconButton';
import PrevIconButton from './PrevIconButton';
import PaginationItem from './PaginationItem';

const Paginator = ({ totalElements, initialActivePage, pageSize }) => {

    const [currentPage, setCurrentPage] = useState(initialActivePage)

    const handleActivePaginationItemChanged = (newItem) => {
        if (newItem > 0 && newItem <= Math.ceil(totalElements / pageSize))
            setCurrentPage(newItem);
    }

    const getItemsToDraw = () => {
        const itemsCount = Math.ceil(totalElements / pageSize);
        const items = [];
        for (let i = 1; i <= itemsCount; i++) {
            items.push(i);
        }
        return items;
    }

    const buildPaginationRow = () => {
        const items = getItemsToDraw();
        return items.map((e) =>
            <PaginationItem
                item={e}
                currentPage={currentPage}
                onClick={() => handleActivePaginationItemChanged(e)}
            />
        )
    }

    return (
        <div className="paginator">
            <span
                className="paginator__pages">
                {`${pageSize} from ${totalElements}`}
            </span>

            <ul className="paginator__list">
                <PrevIconButton
                    onPrevClicked={
                        () => handleActivePaginationItemChanged(currentPage - 1)
                    }
                />
                {
                    buildPaginationRow()
                }
                <NextIconButton
                    onNextClicked={
                        () => handleActivePaginationItemChanged(currentPage + 1)
                    }
                />
            </ul>
        </div>
    )
}

export default Paginator;

