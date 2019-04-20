<!-- Content Row -->
<div class="row">

  <div class="col-xl-8 col-lg-8">
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
  <div class="col-xl-4 col-lg-4">
    <div class="card shadow mb-4">
      <!-- Card Header - Dropdown -->
      <div class="card-header py-3">
        <h6 class="m-0 font-weight-bold text-primary">Amigos por idade</h6>
      </div>
      <!-- Card Body -->
      <div class="card-body">
        <div class="chart-pie pt-4">
          <canvas id="ages-pie"></canvas>
        </div>
        <hr>
        A quantidade de amigos do futuro que participaram, por grupos de idades.
      </div>
    </div>
  </div>

  <div class="col-xl-12 col-lg-12">
    <!-- Area Chart -->
    <div class="card shadow mb-12">
      <div class="card-header py-3">
        <h6 class="m-0 font-weight-bold text-primary">Quantidade por região</h6>
      </div>
      <div class="card-body">
        <div class="chart-bar">
          <canvas id="regions-bar"></canvas>
        </div>
        <hr>
       Gráfico com a quantidade de crianças de cada região.
      </div>
    </div>
  </div>


  <!-- Por idade por cidade -->
  <div class="col-xl-6 col-lg-6 pt-4">
    <div class="card shadow mb-5">
      <!-- Card Header - Dropdown -->
      <div class="card-header py-3">
        <h6 class="m-0 font-weight-bold text-primary">Amigos por idade : <span id="city-name">Fortaleza</span></h6>
      </div>
      <!-- Card Body -->
      <div class="card-body">
        <div id="cities-select-div"></div>
        <div class="chart-pie chart-city-ages pt-4">
          <canvas id="city-ages-pie"></canvas>
        </div>
        <div id="city-empty" class="pt-4"><b>Esta cidade ainda não possui amigos. Selecione outra cidade.</b></div>
        <hr>
        A quantidade de amigos do futuro que participaram em cada cidade, por grupos de idades.
      </div>
    </div>
  </div>

  <!-- Por idade por região -->
  <div class="col-xl-6 col-lg-6 pt-4">
    <div class="card shadow mb-5">
      <!-- Card Header - Dropdown -->
      <div class="card-header py-3">
        <h6 class="m-0 font-weight-bold text-primary">Amigos por idade : <span id="region-name">Grande Fortaleza</span></h6>
      </div>
      <!-- Card Body -->
      <div class="card-body">
        <div id="regions-select-div"></div>
        <div class="chart-pie chart-region-ages pt-4">
          <canvas id="region-ages-pie"></canvas>
        </div>
        <div id="region-empty" class="pt-4"><b>Esta região ainda não possui amigos. Selecione outra região.</b></div>
        <hr>
        A quantidade de amigos do futuro que participaram em cada região, por grupos de idades.
      </div>
    </div>
  </div>

<?php
  include_once "php/model/KidDAO.class.php";
  include_once "php/model/CityDAO.class.php";

  $kidDAO = new KidDAO();
  $kids = $kidDAO->get_all_kids();
  $kids_cities_json = $kidDAO->get_kids_in_city();
  $kidDAO->kidDAO_close();

  $cityDAO = new CityDAO();
  $cities = $cityDAO->get_all_cities();
  $cityDAO->cityDAO_close();

?>

<!-- Tables Kids por cidade -->
<div class="col-xl-8 col-lg-8">
  <div class="card shadow mb-7">
    <div class="card-header py-3">
    <h6 class="m-0 font-weight-bold text-primary">Quantidade por cidade</h6>
  </div>
  <div class="card-body">
    <div class="table-responsive">
      <table class="table table-bordered" id="citiesTable" width="100%" cellspacing="0">
        <thead>
          <tr>
            <th>Cidade</th>
            <th>Região</th>
            <th>Quantidade</th>
          </tr>
        </thead>
        <tfoot>
          <tr>
            <th>Cidade</th>
            <th>Região</th>
            <th>Quantidade</th>
          </tr>
        </tfoot>


        <tbody>
          <?php
            foreach ($cities as $city) {
              $name = $city->get_name();
              $region = $city->get_region();

              $kids_cities_array = json_decode($kids_cities_json,  true, 512, JSON_UNESCAPED_UNICODE);

              if ( isset($kids_cities_array[$name]) ) {
                $quantitiy = $kids_cities_array[$name];
              } else {
                $quantitiy = 0;
              }
          ?>
          <tr>
            <td><?= $name ?></td>
            <td><?= $region ?></td>
            <td><?= $quantitiy ?></td>
          </tr>
          <?php
            }  
          ?>
        </tbody>
      </table>
    </div>
  </div>
    
  </div>
</div>

<!-- Donut Chart -->
  <div class="col-xl-4 col-lg-4">
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




</div>