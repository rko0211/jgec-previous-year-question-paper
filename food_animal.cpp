#include<bits/stdc++.h>
using namespace std;
void solve(){
    long long a,b,c,x,y;
    cin>>a>>b>>c>>x>>y;
    int d1 = ((x-a)>0)?(x-a):0 ;
    int d2 = ((y-b)>0)?(y-b):0;
    if((d1+d2)<=c){
        cout<<"YES\n";
    }
    else{
        cout<<"NO\n";
    }
}
int main(){

int t; cin>>t;
while(t--){
    solve();
}


    return 0;
}