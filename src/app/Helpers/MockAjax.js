const MockAjax = (data, error) => {
	return () => {
		return new Promise((res, rej) => {
			if(data){
				res(data);
			} else if(error){
				rej(error)
			} else {
				res()
			}
		});
	}
}

export default MockAjax


//export default teste = () => {}