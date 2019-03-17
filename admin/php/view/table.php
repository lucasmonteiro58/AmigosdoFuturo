<?php
  include_once "php/model/KidDAO.class.php";
  include_once "php/model/CityDAO.class.php";
  include_once "php/model/FeedbackDAO.class.php";

  $kidDAO = new KidDAO();
  $kids = $kidDAO->get_all_kids();
  $kidDAO->kidDAO_close();

?>

<!-- Tables Kids -->
<div class="card shadow mb-4">
  <div class="card-header py-3">
    <h6 class="m-0 font-weight-bold text-primary">Dados usuários</h6>
  </div>
  <div class="card-body">
    <div class="table-responsive">
      <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Gênero</th>
            <th>Idade</th>
            <th>Cidade</th> 
            <th>Região</th>
            <th>Emblema</th>
          </tr>
        </thead>
        <tfoot>
          <tr>
            <th>Nome</th>
            <th>Gênero</th>
            <th>Idade</th>
            <th>Cidade</th> 
            <th>Região</th>
            <th>Emblema</th>
          </tr>
        </tfoot>


        <tbody>
          <?php
            foreach ($kids as $kid) {
              $name = $kid->get_name();
              $gender = $kid->get_gender();
              $age = $kid->get_age();  

              $badge_id = $kid->get_badge_id();
              $badgeDAO = new BadgeDAO();
              $badge = $badgeDAO->get_badge_by_id($badge_id);
              $badge_name = $badge->get_name();

              $city_id = $kid->get_city_id();
              $cityDAO = new CityDAO();
              $city = $cityDAO->get_city_by_id($city_id);
              $city_name = $city->get_name();
              $region = $city->get_region();
          ?>
          <tr>
            <td><?= $name ?></td>
            <td><?= $gender ?></td>
            <td><?= $age ?> anos</td>
            <td><?= $city_name ?></td>
            <td><?= $region ?></td>
            <td><?= $badge_name ?></td>
          </tr>

          <?php
            }  
          ?>
          
        </tbody>
      </table>
    </div>
  </div>
</div>
<!-- /.container-fluid -->

<!-- Table Feedback -->
<div class="card shadow mb-4">
  <div class="card-header py-3">
    <h6 class="m-0 font-weight-bold text-primary">Feedbacks</h6>
  </div>
  <div class="card-body">
    <div class="table-responsive">
      <table class="table table-bordered" id="feedbackTable" width="100%" cellspacing="0">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Gostou</th>
            <th>Opinião</th>
          </tr>
        </thead>
        <tfoot>
          <tr>
            <th>Nome</th>
            <th>Gostou</th>
            <th>Opinião</th>
          </tr>
        </tfoot>


        <tbody>
          <?php
            foreach ($kids as $kid) {
              $name = $kid->get_name(); 

              $feedback_id = $kid->get_feedback_id();
              $feedbackDAO = new FeedbackDAO();
              $feedback = $feedbackDAO->get_feedback_by_id($feedback_id);
              $text = $feedback->get_text();
              $liked = $feedback->get_liked();
          ?>
          <tr>
            <td><?= $name ?></td>
            <td><?= $liked ?></td>
            <td><?= $text ?></td>
          </tr>

          <?php
            }  
          ?>
          
        </tbody>
      </table>
    </div>
  </div>
</div>
<!-- /.container-fluid -->