// PagenationComponent.jsx
import Pagination from "react-bootstrap/Pagination";
import PropTypes from "prop-types";
import './PagenationComponent.css';

function PagenationComponent({ currentPage, totalPages, onPageChange }) {
    const handlePageChange = (pageNumber) => {
        onPageChange(pageNumber);
    };

    const renderPagination = () => {
        const items = [];

        // 처음 페이지와 이전 페이지 버튼
        items.push(
            <Pagination.First key="first" onClick={() => handlePageChange(1)} />,
            <Pagination.Prev
                key="prev"
                onClick={() => handlePageChange(currentPage > 1 ? currentPage - 1 : 1)}
            />
        );

        // 페이지 번호들
        let startPage = Math.max(1, currentPage - 2);
        let endPage = Math.min(totalPages, currentPage + 2);

        if (currentPage <= 3) {
            startPage = 1;
            endPage = Math.min(totalPages, 5);
        } else if (currentPage >= totalPages - 2) {
            startPage = Math.max(1, totalPages - 4);
            endPage = totalPages;
        }

        if (currentPage > 3) {
            items.push(
                <Pagination.Item key={1} onClick={() => handlePageChange(1)}>
                    1
                </Pagination.Item>
            );
            if (currentPage > 4) {
                items.push(<Pagination.Ellipsis key="start-ellipsis" />);
            }
        }

        for (let number = startPage; number <= endPage; number++) {
            items.push(
                <Pagination.Item
                    key={`page-${number}`}
                    active={number === currentPage}
                    onClick={() => handlePageChange(number)}
                >
                    {number}
                </Pagination.Item>
            );
        }

        if (currentPage < totalPages - 2) {
            if (currentPage < totalPages - 3) {
                items.push(<Pagination.Ellipsis key="end-ellipsis" />);
            }
            items.push(
                <Pagination.Item key={totalPages} onClick={() => handlePageChange(totalPages)}>
                    {totalPages}
                </Pagination.Item>
            );
        }

        // 다음 페이지와 마지막 페이지 버튼
        items.push(
            <Pagination.Next
                key="next"
                onClick={() =>
                    handlePageChange(currentPage < totalPages ? currentPage + 1 : totalPages)
                }
            />,
            <Pagination.Last key="last" onClick={() => handlePageChange(totalPages)} />
        );

        return items;
    };

    return <Pagination className="page">{renderPagination()}</Pagination>;
}

PagenationComponent.propTypes = {
    currentPage: PropTypes.number.isRequired,
    totalPages: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
};

export default PagenationComponent;
