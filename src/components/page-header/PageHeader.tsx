import React, {FC} from 'react';
import {StyledPageHeader} from "./StyledPageHeader";
import {PageHeaderProps} from "./PageHeaderProps";

const PageHeader: FC<PageHeaderProps> = ({title}) => {
    return (
        <StyledPageHeader>
            <span>{title}</span>
        </StyledPageHeader>
    );
};

export default PageHeader;
