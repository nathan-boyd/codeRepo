void swap(int *a, int *b){
	int t=*a; *a=*b; *b=t;
}
void sort(int arr[], int beg, int end){
	if (end > beg + 1){
	int piv = arr[beg], l = beg + 1, r = end;
	while (l < r){
		if (arr[l] <= piv)
			l++;
		else
		swap(&arr[l], &arr[--r]);
	}
	swap(&arr[--l], &arr[beg]);
	sort(arr, beg, l);
	sort(arr, r, end);
	}
}

void quickSort(int *arr, int elements) {

	#define  MAX_LEVELS  300

	int  piv, beg[MAX_LEVELS], end[MAX_LEVELS], i=0, L, R, swap ;
	beg[0]=0; end[0]=elements;
	
	while (i>=0) {
		L=beg[i]; R=end[i]-1;
		if (L<R) {
			piv=arr[L];
		
			while (L<R) {
				while (arr[R]>=piv && L<R) R--; if (L<R) arr[L++]=arr[R];
				while (arr[L]<=piv && L<R) L++; if (L<R) arr[R--]=arr[L]; 
			}
			arr[L]=piv; beg[i+1]=L+1; end[i+1]=end[i]; end[i++]=L;
			if (end[i]-beg[i]>end[i-1]-beg[i-1]) {
				swap=beg[i]; beg[i]=beg[i-1]; beg[i-1]=swap;
				swap=end[i]; end[i]=end[i-1]; end[i-1]=swap; 
			}
		}
		else {
			i--; 
		}
	}
}