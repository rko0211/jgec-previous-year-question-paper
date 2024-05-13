#include <bits/stdc++.h>
using namespace std;
void solve()
{
  int n;
  cin >> n;
  string s;
  cin >> s;
  int val = s[n - 1] - '0';
  int ans = 0;
  ans += val;
  for (int i = n - 2; i >= 0; i--)
  {
    if (s[i] - '0' > 0)
    {
      ans += (s[i] - '0' + 1);
    }
  }
  cout << ans << endl;
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