#include<bits/stdc++.h>
using namespace std;
void solve(){
    int n; cin>>n;
    int a[n]; for(int i=0;i<n;i++) cin>>a[i];
    sort(a,a+n);
    int val = a[0];
    int ans =0;
    for(int i=0;i<n;i++){
        if(a[i]!=val){
           ans+=abs(a[i]-val);
        }
    }
    cout<<ans<<endl;
}
int main(){

int t; cin>>t;
while(t--){
    solve();
}

    return 0;
}