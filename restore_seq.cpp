#include <bits/stdc++.h>
using namespace std;
void solve()
{
  int a[7];
  for (int i = 0; i < 7; i++)
  {
    cin >> a[i];
  }
  int x = a[0];
  int y = a[1];
  int z = (a[6] - (x + y));
  cout << x << " " << y << " " << z << endl;
}
int main()
{

  int t;
  cin >> t;
  while (t--)
  {
    solve();
  }

  return 0;
}