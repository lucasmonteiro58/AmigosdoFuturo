<!-- Content Row -->
<div class="row">

  <div class="col-xl-8 col-lg-7">
    <!-- Bar Chart -->
    <div class="card shadow mb-4">
      <div class="card-header py-3">
        <h6 class="m-0 font-weight-bold text-primary">Quantidade por emblema</h6>
      </div>
      <div class="card-body">
        <div class="chart-bar">
          <canvas id="badges-bar"></canvas>
        </div>
        <hr>
       Gráfico com a quantidade de crianças de cada um dos 7 emblemas.
      </div>
    </div>
  </div>

  <!-- Donut Chart -->
  <div class="col-xl-4 col-lg-5">
    <div class="card shadow mb-4">
      <!-- Card Header - Dropdown -->
      <div class="card-header py-3">
        <h6 class="m-0 font-weight-bold text-primary">Amigos por gênero</h6>
      </div>
      <!-- Card Body -->
      <div class="card-body">
        <div class="chart-pie pt-4">
          <canvas id="gender-pie"></canvas>
        </div>
        <hr>
        A quantidade de amigos do futuro que participaram, por gênero.
      </div>
    </div>
  </div>

  <!-- Donut Chart -->
  <div class="col-xl-4 col-lg-5">
    <div class="card shadow mb-4">
      <!-- Card Header - Dropdown -->
      <div class="card-header py-3">
        <h6 class="m-0 font-weight-bold text-primary">Amigos por idade</h6>
      </div>
      <!-- Card Body -->
      <div class="card-body">
        <div class="chart-pie pt-4">
          <canvas id="age-polar"></canvas>
        </div>
        <hr>
        A quantidade de amigos do futuro que participaram, por grupos de idades.
      </div>
    </div>
  </div>

  <div class="col-xl-8 col-lg-7">
    <!-- Area Chart -->
    <div class="card shadow mb-7">
      <div class="card-header py-3">
        <h6 class="m-0 font-weight-bold text-primary">Acessos por dia</h6>
      </div>
      <div class="card-body">
        <div class="chart-area">
          <canvas id="myAreaChart"></canvas>
        </div>
        <hr>
        Alguma legenda.
      </div>
    </div>
  </div>
</div>