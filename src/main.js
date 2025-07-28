import { supabase } from './services/supabase.js';

window.login = async function () {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const { data, error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    alert('Login gagal: ' + error.message);
  } else {
    loadUser();
  }
};

window.logout = async function () {
  await supabase.auth.signOut();
  document.getElementById('loggedin').style.display = 'none';
};

window.loadUser = async function () {
  const { data: { user } } = await supabase.auth.getUser();
  if (user) {
    document.getElementById('loggedin').style.display = 'block';
    document.getElementById('username').textContent = user.email;
    loadPresensi(user.id);
  }
};

window.isiPresensi = async function () {
  const { data: { user } } = await supabase.auth.getUser();
  const kelas_id = document.getElementById('kelas_id').value;
  const lokasi = document.getElementById('lokasi').value;

  const { error } = await supabase
    .from('presensi')
    .insert([{ user_id: user.id, kelas_id, lokasi, status: 'hadir' }]);

  if (error) {
    alert('Gagal presensi: ' + error.message);
  } else {
    alert('Presensi berhasil!');
    loadPresensi(user.id);
  }
};

window.loadPresensi = async function (user_id) {
  const { data, error } = await supabase
    .from('presensi')
    .select('*')
    .eq('user_id', user_id)
    .order('waktu_presensi', { ascending: false });

  const ul = document.getElementById('riwayat');
  ul.innerHTML = '';
  if (data) {
    data.forEach(item => {
      const li = document.createElement('li');
      li.textContent = `${item.waktu_presensi} | Lokasi: ${item.lokasi}`;
      ul.appendChild(li);
    });
  }
};

loadUser();
