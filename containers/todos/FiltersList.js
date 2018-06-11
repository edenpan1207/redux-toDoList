import React from 'react'
import Filter from './Filter'

const FiltersList = () => (
  <p>
    <Filter filter="SHOW_ALL">
      全部
    </Filter>
    {", "}
    <Filter filter="SHOW_ACTIVE">
      進行中
    </Filter>
    {", "}
    <Filter filter="SHOW_COMPLETED">
      已完成
    </Filter>
  </p>
)
export default FiltersList