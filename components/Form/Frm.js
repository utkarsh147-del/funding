import styled from 'styled-components';
import FormLeftWrapper from './components/FormLeftWrapper';
import FormRightWrapper from './components/FormRightWrapper';

const Frm = () => {
  return (
   <FormWrapper>
    <FormMain>
      <FormInputsWrapper>
        <FormLeftWrapper/>
          <FormRightWrapper/>

          
      </FormInputsWrapper>
    </FormMain>
   </FormWrapper>
  )
  
}
const FormWrapper = styled.div`
    width: 100%;
    display:flex;
    justify-content:center;
`

const FormMain = styled.div`
    width:80%;
`

const FormInputsWrapper = styled.div`
    display:flex;
    justify-content:space-between ;
    margin-top:45px ;
`
export default Frm