import PropTypes from 'prop-types';

import { TitleStyled } from 'components/styled/SectionStyled.styled';

export const Section = ({ title, children }) => {
  return (
    <TitleStyled>
      <h2>{title}</h2>
      {children}
    </TitleStyled>
  );
};
Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
};
