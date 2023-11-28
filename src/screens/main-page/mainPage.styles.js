import styled from "styled-components";

export const Root = styled.div`
    min-height: 100dvh;
`

export const DefaultLabel = styled.strong`    
    color: #606367;
    font-size: 20px;
    justify-self: center;
    height: 24px;
`; 

export const MainHeader = styled.header`
    background-color: #DC143C;
    height: 80px;   
    display: flex;
    grid-template-columns: 1fr;   
    
    padding: 10px 80px;
    
    @media (min-width: 600px){        
        padding: 10px 100px;
    }

    @media (min-width: 900px){        
        padding: 10px 150px;
    }

    @media (min-width: 1270px){        
        padding: 10px 200px;
    }

    @media (min-width: 1520px){         
        padding: 10px 250px;  
    }
`;

export const Mainfooter = styled.footer`
    background-color: #DC143C;
    height: 50px;     
    bottom:0;
    width:100%;
    clear: both;
    position: relative;
`;

export const ImgBanner = styled.div`
    display: grid;   
    height: 80px;
    width: auto;
    padding: 4px;
    background: url(${props=>props.bgimage});
    text-align: center;
    transform: rotate(${props=>props.rotate}deg);
    margin-top: ${props=>props.margintop};
`

export const GridWrapper = styled.div`
    display: grid;
    padding: 50px 80px;
    min-height: 73.5dvh;
    grid-template-columns: 1fr;

    @media (min-width: 600px){        
        grid-template-columns: 1fr 1fr;
        padding: 50px 100px;
    }

    @media (min-width: 900px){        
        grid-template-columns: 1fr 1fr 1fr;
        padding: 50px 150px;
    }

    @media (min-width: 1270px){        
        grid-template-columns: 1fr 1fr 1fr 1fr;
        padding: 50px 200px;
    }

    @media (min-width: 1520px){      
        padding: 50px 250px;     
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    }
`;

export const GridMenu = styled.div`   
    display: grid;
    grid-template-columns: 1fr;

    @media (min-width: 600px){        
        grid-template-columns: 1fr ;
    }

    @media (min-width: 900px){        
        grid-template-columns: 1fr 1fr;
    }

    @media (min-width: 1270px){        
        grid-template-columns: 1fr 1fr;
    }

    @media (min-width: 1520px){    
        grid-template-columns: 1fr 1fr;
    }
`;

export const GridItem = styled.div `
    margin: auto;
`;

export const GridContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    gap: 20px;
    min-height: 350px;
    min-width: 240px;
    max-width: 300px;
`;

export const ShowMoreBtn = styled.button`
    width: 26dvh;
    height: 52px;
    border-radius: 5px;
    background-color: #6296a5;
    border: none;
    box-shadow: 0px 0px 2px black;
`

export const Explore = styled.label`   
    font-family: 'Poppins', sans-serif;
    color: #f1f1f1;
    font-weight: bold;
    margin-top: 12px;
`

export const DefaultIcon = styled.img`
    width: 30px; 
    margin-right: 20px;
    margin-top: -7px;
`;

export const SerchField = styled.input`
    min-width: 350px;
    border-radius: 10px;
    background-color: #f1f1f1;
    font-family: 'Poppins', sans-serif;
    color: #363738;
    font-weight: bold;
    margin-left: 15px;

`

export const ItensFound = styled.div`
    float: right; 
    font-family: 'Poppins', sans-serif;
    color: #656768;
    font-weight: bold;
`