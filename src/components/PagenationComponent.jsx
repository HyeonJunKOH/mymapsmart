import Pagination  from "react-bootstrap/Pagination";
import propTypes  from "prop-types";
import './PagenationComponent.css'

function PagenationComponent({currentPage, totalPages, onPageChange}){
    const handlePageChange = (pageNumber)=>{
        onPageChange(pageNumber);
    };

    const renderPagination = ()=>{
        const items = [];

        if(currentPage > 3){
            items.push(
                <Pagination.Item key={1} onClick={()=>handlePageChange(1)}>
                    1
                </Pagination.Item>
            );
            items.push(<Pagination.Ellipsis key={"start-ellipsis"}/>);
        }
        let startPage = Math.max(1, currentPage -2);
        let endPage = Math.min(totalPages, currentPage +2);

        if(currentPage <=3){
            startPage = 1;
            endPage = Math.min(totalPages, 5);
        }else if(currentPage >= totalPages -2 ){
            startPage = Math.max(1, totalPages -4);
            endPage = totalPages;
        }
        for(let number = startPage; number <= endPage; number++){
            items.push(
                <Pagination.Item
                    key={`page-${number}`}
                    active={number === currentPage}
                    onClick={()=>handlePageChange(number)}
                >
                    {number}
                </Pagination.Item>
            );
        }
        if(currentPage < totalPages -2){
            items.push(<Pagination.Ellipsis key={"end-ellipsis"}/>);
            items.push(
                <Pagination.Item key={totalPages} onClick={()=>handlePageChange(totalPages)}>
                    {totalPages}
                </Pagination.Item>
            );
        }
        return items;
    };

    return(
        <Pagination className="page">
            <Pagination.First onClick={()=>handlePageChange(1)}/>
            <Pagination.Prev onClick={()=> handlePageChange(currentPage > 1 ? currentPage -1 : 1)}/>
                {renderPagination()}
            <Pagination.Next onClick={()=>handlePageChange(currentPage < totalPages ? currentPage+1 : totalPages)}/>
            <Pagination.Last onClick={()=>handlePageChange(totalPages)}/>
        </Pagination>
    );
}

    PagenationComponent.propTypes = {
        currentPage: propTypes.number.isRequired,
        totalPages: propTypes.number.isRequired,
        onPageChange: propTypes.func.isRequired,
    };

export default PagenationComponent;