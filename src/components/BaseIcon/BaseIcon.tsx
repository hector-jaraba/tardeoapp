import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconName, IconPrefix } from '@fortawesome/fontawesome-common-types'

interface Props {
  icon: string
  variant?: string
}

const BaseIcon: React.FC<Props> = ({ icon, variant }) => (
  <FontAwesomeIcon icon={[variant as IconPrefix, icon as IconName]} />
)

BaseIcon.defaultProps = {
  variant: 'fas',
}

export default BaseIcon
