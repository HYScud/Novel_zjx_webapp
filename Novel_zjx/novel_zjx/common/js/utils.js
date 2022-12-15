export default {
	pushHistory(searchHistory, temp) {
		var issame=true
		searchHistory.forEach((item, index) => { //js遍历数组
			if(item==temp){
				issame=false
			}
		});
		if(issame){
			searchHistory.push(temp)
		}
		return searchHistory
	}
}
