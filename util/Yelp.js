const apiKey = 'huEI5l7ciECIQUDwVe_U3oDznWetgSOVpC4mwBuUakV_eaZVwGNnJBsYw7R1__rd3shEGAkG0ruxxLki5Kq4gMqfbSGYddrQvCsT0dFbENW7H4NEz9SvmEiNvylSW3Yx';

const Yelp = {
	search(term, location, sortBy) => {
		return fetch(`https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`);
	}
}