const project_id = "project_id";
const first_date = "'2018-01-01'";
module.exports = {
  project_id,
  first_date
}

function country_group(country){
  return `
  case
    when ${channel} in ('DIR-WEB', 'IND-booking') then 'web'
    when ${channel} in ('DIR-Expedia') then 'Web'
    when ${channel} in ('WEB') then ${channel}
    else 'Other'
  end`
  }

